import { axiosDefault } from './instances'
import create from './methods'

const { get, post, put, patch, del, options } = create(axiosDefault)

export { get, post, put, patch, del, options }
