from enum import Enum
from typing import List


class jobState(Enum):
    created = "created"
    queued = "queued"
    running = "running"
    completed = "completed"

class workerState(Enum):
    idle = "idle"
    busy = "busy"

class Job:
    jobType: str
    jobFile: str
    state: jobState
    
    def __init__(self, jobtype: str, jobFile: str) -> None:
        self.jobType = jobtype
        self.jobFile = jobFile
        self.state = jobState.created
    
    def setQueued(self):
        self.state = jobState.queued
        
    def setRunning(self):
        self.state = jobState.running
    
    def setCompleted(self):
        self.state = jobState.completed
    
    def getState(self) -> jobState:
        return self.state
    
    def getType(self) -> str:
        return self.jobType
    
    def getFile(self) -> str:
        return self.jobFile
    

class Worker:
    currentJob: Job
    state: workerState
    def __init__(self) -> None:
        self.currentJob = Job("","") #TODO fix this
        self.state = workerState.idle
        
    def assignJob(self, job: Job):
        self.currentJob = job
        job.setQueued()
        self.state = workerState.busy
        
    
    def completeJob(self) -> bool:
        self.currentJob.setCompleted()
        self.state = workerState.idle
        return True
    
    def getState(self) -> workerState:
        return self.state
    
class JobScheduler:
    jobs: List[Job] 
    workers: List[Worker]
    def __init__(self) -> None:
        self.jobs = []
        self.workers = []
    
    def addJob(self, job: Job):
        job.setQueued()
        self.jobs.append(job)
    
    def addWorker(self, worker: Worker) -> bool:
        self.workers.append(worker)
    
    def assignJobs(self):
        # get all available workers
        availableWorkers = self.getAvailableWorkers()
        
        # get all queued jobs
        availableJobs = self.getQueuedJobs()
        
        # find min of their length
        matchSize = min(len(availableWorkers), len(availableJobs))
        for i in range(matchSize):
            availableWorkers[i].assignJob(availableJobs[i])
            availableJobs[i].setRunning
            
        
    
    def getAvailableWorkers(self) -> List[Worker]:
        availableWorkers = []
        for iWorker in self.workers:
            if iWorker.getState() == workerState.idle:
                availableWorkers.append(iWorker)
        return availableWorkers
    
    def getCreatedJobs(self) -> List[Job]:
        createdJobs = []
        for job in self.jobs:
            if (job.getState() == jobState.created):
                createdJobs.append(job)
        return createdJobs
    
    def getQueuedJobs(self) -> List[Job]:
        queuedJobs = []
        for job in self.jobs:
            if (job.getState() == jobState.queued):
                queuedJobs.append(job)
        return queuedJobs
    
    def getRunningJobs(self) -> List[Job]:
        runningJobs = []
        for job in self.jobs:
            if (job.getState() == jobState.running):
                runningJobs.append(job)
        return runningJobs
    
    def getCompletedJobs(self) -> List[Job]:
        completedJobs = []
        for job in self.jobs:
            if (job.getState() == jobState.completed):
                completedJobs.append(job)
        return completedJobs
    
        
        
        
# # TESTING

# job1 = new Job({ type: "data_processing_1", file: "data.txt" })
# job2 = new Job({ type: "report_generation_2", format: "pdf" })
# job3 = new Job({ type: "data_processing_3", file: "data.txt" })

# TODO DELETE
job1 = Job("data_processing_1", "data.txt")
job2 = Job("report_generation_2", "pdf")
job3 = Job("data_processing_3", "data.txt")

worker1 = Worker()
worker2 = Worker()

jobScheduler = JobScheduler()

jobScheduler.addJob(job1)
jobScheduler.addJob(job2)
jobScheduler.addJob(job3)

jobScheduler.addWorker(worker1)
jobScheduler.addWorker(worker2)

jobScheduler.assignJobs()

worker1.completeJob()

jobScheduler.assignJobs()

createdJobs = jobScheduler.getCreatedJobs()
queuedJobs = jobScheduler.getQueuedJobs()
runningJobs = jobScheduler.getRunningJobs()
completedJobs = jobScheduler.getCompletedJobs()

print("Created jobs: ", len(createdJobs))
print("Queued jobs: ", len(queuedJobs))
print("Running jobs: ", len(runningJobs))
print("Completed jobs: ", len(completedJobs))

def printJobs(titlestring: str, jobs: List[Job]):
    print(titlestring, ": [")
    for job in jobs:
        print("{")
        print("type : ", job.getType())
        print("file : ", job.getFile())
        print("state : ", job.getState())
        print("},")
    print("] \n\n")
       
printJobs("Created jobs", createdJobs)
printJobs("Queued jobs", queuedJobs)
printJobs("Running jobs", runningJobs)
printJobs("Completed jobs", completedJobs)