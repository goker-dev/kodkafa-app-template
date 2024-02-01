import { ErrorType } from '@/types/error.type';
import { devMessage } from '@/utils/dev.util';

class CustomError extends Error {
  status = 0;
  message = '';
  timestamp = 0;
  method = '-';
  path = '-';
  stack = '-';
  constructor(
    public _error?:
      | ErrorType
      | { status: number; message: string | string[]; error: string }
      | undefined,
  ) {
    if (!_error) return;
    const error = ('data' in _error ? _error.data : _error) as ErrorType;

    super(('message' in error && error.message) || 'CustomError');
    if ('error' in error) {
      this.status = 503;
      this.name = 'Fetch Error';
      this.message = 'Server not response.' + devMessage(' Check, the backend is up!');
    } else {
      this.status = ('status' in error && error.status) || 1;
      this.name = ('name' in error && error.name) || 'Custom Error';
      this.message = ('message' in error && String(error.message)) || 'Custom Error';
    }
    this.timestamp = ('timestamp' in error && Number(error.timestamp)) || new Date().getTime();
    this.stack = ('stack' in error && error.stack) || '-';
    this.path = ('path' in error && error.path) || '-';
    this.method = ('method' in error && error.method) || '';
  }
  toObject() {
    return JSON.parse(JSON.stringify(this)) as ErrorType;
  }
}

export default CustomError;
