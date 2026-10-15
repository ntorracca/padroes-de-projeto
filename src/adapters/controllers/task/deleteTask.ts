import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { badRequest, noContent, serverError } from "../../presentations/api/httpResponses/httpResponses";
import { DeleteTask } from "../../../usecases/deleteTask";
import { Validation } from "../../interfaces/validation";

export class DeleteTaskController implements Controller {
  constructor(
        private readonly deleteTask: DeleteTask,
        private readonly validation: Validation
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const { id } = httpRequest.body;

    const isValid = this.validation.validate({ id });

    const error = await this.deleteTask.delete({ id });
    if (error) {
      return badRequest(error);
    }

    return noContent();
  } catch (error: any) {
    return serverError(error);
  }
}