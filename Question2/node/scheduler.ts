enum jobState {
    queued = "queued",
    running = "running",
    completed = "completed"
};

enum workerState {
    idle = "idle",
    busy = "busy"
};

class Job{
    type: string;
    file: string;
    state: jobState;
    constructor(type: string, file: string){
        this.type = type;
        this.file = file;
        this.state = jobState.queued;
    }

    setQueued(){
        this.state = jobState.queued;
    }

    setRunning(){
        this.state = jobState.running;
    }
    setCompleted(){
        this.state = jobState.completed;
    }
    getState(): jobState{
        return this.state;
    }
}

class JobWorker{
    currentJob: any;
    state: workerState;

    constructor(){
        this.state = workerState.idle;
        this.currentJob;
    }

    completeJob(): boolean{
        if (this.state === workerState.busy){
            this.currentJob.setCompleted();
            this.state = workerState.idle;
        }
        return false
    }

    assignJob(job: Job) : boolean{
        if (this.state === workerState.idle){
            this.currentJob = job;
            this.state = workerState.busy;
            return true;
        }
        return false;
    }

    getState(): workerState{
        return this.state;
    }
}

class JobScheduler{
    jobs: Job[];
    workers: JobWorker[];
    constructor(){
        this.jobs = [];
        this.workers = [];
    }

    getIdleWorkers(): JobWorker[]{
        let idleWorkers:JobWorker[] = [];

        this.workers.forEach(function(worker) {
            if (worker.getState() === workerState.idle){
                idleWorkers.push(worker);
            }             
        });

        return idleWorkers;
    }

    addJob(job: Job){
        this.jobs.push(job);
    }

    addWorker(worker:JobWorker){
        this.workers.push(worker);
    }

    assignJobs(){
        // check for available workers
        const availableWorkers = this.getIdleWorkers();

        // check for queued jobs
        const queuedJobs = this.getQueuedJobs();
        
        // assign jobs to free workers
        const matchCount = Math.min(availableWorkers.length, queuedJobs.length)

        for(let i = 0; i < matchCount; i++){
            let isAssigned = availableWorkers[i].assignJob(queuedJobs[i]);
            if (isAssigned){
                queuedJobs[i].setRunning();
            }
        }
    }

    getQueuedJobs() : Job[]{
        let result : Job[] = [];

        this.jobs.forEach(function(job) {
            if (job.getState() === jobState.queued){
                result.push(job);
            }             
        });

        return result;
    }

    getRunningJobs() : Job[]{
        let result : Job[] = [];

        this.jobs.forEach(function(job) {
            if (job.getState() === jobState.running){
                result.push(job);
            }             
        });

        return result;
    }

    getCompletedJobs() : Job[]{
        let result : Job[] = [];

        this.jobs.forEach(function(job) {
            if (job.getState() === jobState.completed){
                result.push(job);
            }             
        });

        return result;
    }

}

// TESTING -------------------------------------------------------------------------------------

// const job1 = new Job({ type: "data_processing_1", file: "data.txt" });
// const job2 = new Job({ type: "report_generation_2", format: "pdf" });
// const job3 = new Job({ type: "data_processing_3", file: "data.txt" });

// TODO DELETE
const job1 = new Job("data_processing_1", "data.txt");
const job2 = new Job("report_generation_2", "pdf");
const job3 = new Job("data_processing_3", "data.txt");

const worker1 = new JobWorker();
const worker2 = new JobWorker();

const jobScheduler = new JobScheduler();

jobScheduler.addJob(job1);
jobScheduler.addJob(job2);
jobScheduler.addJob(job3);

jobScheduler.addWorker(worker1);
jobScheduler.addWorker(worker2);

jobScheduler.assignJobs();

worker1.completeJob();

jobScheduler.assignJobs();

const queuedJobs = jobScheduler.getQueuedJobs();
const runningJobs = jobScheduler.getRunningJobs();
const completedJobs = jobScheduler.getCompletedJobs();

console.log("Queued jobs:", queuedJobs);
console.log("Running jobs:", runningJobs);
console.log("Completed jobs:", completedJobs);

