import { DeleteTaskModel } from "../deleteTask";

export interface DeleteTaskRepository {
  delete(task: DeleteTaskModel): Promise<Error | void>;
}