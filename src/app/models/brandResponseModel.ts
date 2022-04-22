import { Brand } from "./category";
import { ResponseModel } from "./ResponseModel";

export interface BramdResponseModel extends ResponseModel{
data:Brand[];
}