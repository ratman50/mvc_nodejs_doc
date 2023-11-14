import { Request, Response } from 'express';

interface Controller<TResultDto, TDto> {
  index(): Promise<TResultDto[]>;
  show(id:string): Promise<TResultDto>;
  create(req: Request, res: Response): void;
  update(id:string, value:TDto): Promise<TResultDto>;
  delete(id:string): void;
}

export default Controller;