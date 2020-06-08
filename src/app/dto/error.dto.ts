export interface ErrorDto {
  id: number;
  timestamp: Date;
  className: string;
  methodName: string;
  errorMessage: string;
}
