import { Input } from '../../../commands';
import { Configuration } from '../../configuration';
export declare function getValueOrDefault<T = any>(configuration: Required<Configuration>, propertyPath: string, appName: string, key?: 'path' | 'webpack' | 'webpackPath', options?: Input[], defaultValue?: T): T;
