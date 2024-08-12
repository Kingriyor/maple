class Job:
    def __init__(self, ) -> None:
        pass
    
    def setQueued(self) -> bool:
        return True

class Worker:
    def __init__(self) -> None:
        pass
    
    def completeJob(self) -> bool:
        return True
    
class JobScheduler:
    def __init__(self) -> None:
        pass
    
    def addJob(self, job: Job) -> bool:
        return True
        