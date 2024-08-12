"use strict";
var jobState;
(function (jobState) {
    jobState["queued"] = "queued";
    jobState["running"] = "running";
    jobState["completed"] = "completed";
})(jobState || (jobState = {}));
;
var workerState;
(function (workerState) {
    workerState["idle"] = "idle";
    workerState["busy"] = "busy";
})(workerState || (workerState = {}));
;
// enum jobType {
//     data_processing = "data_processing",
//     report_generation = "report_generation"
// }
class Job {
    constructor(type, file) {
        this.type = type;
        this.file = file;
        this.state = jobState.queued;
    }
    setQueued() {
        this.state = jobState.queued;
    }
    setRunning() {
        this.state = jobState.running;
    }
    setCompleted() {
        this.state = jobState.completed;
    }
    getState() {
        return this.state;
    }
}
class JobWorker {
    constructor() {
        this.state = workerState.idle;
        this.currentJob;
    }
    completeJob() {
        if (this.state === workerState.busy) {
            this.currentJob.setCompleted();
            this.state = workerState.idle;
        }
        return false;
    }
    assignJob(job) {
        if (this.state === workerState.idle) {
            this.currentJob = job;
            this.state = workerState.busy;
            return true;
        }
        return false;
    }
    getState() {
        return this.state;
    }
}
class JobScheduler {
    constructor() {
        this.jobs = [];
        this.workers = [];
    }
    getIdleWorkers() {
        let idleWorkers = [];
        this.workers.forEach(function (worker) {
            if (worker.getState() === workerState.idle) {
                idleWorkers.push(worker);
            }
        });
        return idleWorkers;
    }
    addJob(job) {
        this.jobs.push(job);
    }
    addWorker(worker) {
        this.workers.push(worker);
    }
    assignJobs() {
        // check for available workers
        const availableWorkers = this.getIdleWorkers();
        // check for queued jobs
        const queuedJobs = this.getQueuedJobs();
        // assign jobs to free workers
        const matchCount = Math.min(availableWorkers.length, queuedJobs.length);
        for (let i = 0; i < matchCount; i++) {
            let isAssigned = availableWorkers[i].assignJob(queuedJobs[i]);
            if (isAssigned) {
                queuedJobs[i].setRunning();
            }
        }
    }
    getQueuedJobs() {
        let result = [];
        this.jobs.forEach(function (job) {
            if (job.getState() === jobState.queued) {
                result.push(job);
            }
        });
        return result;
    }
    getRunningJobs() {
        let result = [];
        this.jobs.forEach(function (job) {
            if (job.getState() === jobState.running) {
                result.push(job);
            }
        });
        return result;
    }
    getCompletedJobs() {
        let result = [];
        this.jobs.forEach(function (job) {
            if (job.getState() === jobState.completed) {
                result.push(job);
            }
        });
        return result;
    }
}
// TESTING -------------------------------------------------------------------------------------
// const job1 = new Job({ type: "data_processing", file: "data.txt" });
// const job2 = new Job({ type: "report_generation", format: "pdf" });
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
// delete
// job2.setCompleted();
jobScheduler.assignJobs();
worker1.completeJob();
jobScheduler.assignJobs();
const queuedJobs = jobScheduler.getQueuedJobs();
const runningJobs = jobScheduler.getRunningJobs();
const completedJobs = jobScheduler.getCompletedJobs();
console.log("Queued jobs:", queuedJobs);
console.log("Running jobs:", runningJobs);
console.log("Completed jobs:", completedJobs);
