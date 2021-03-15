import axios from 'axios';

interface InitializeOptions {
  version: number;
  apiKey: string;
  secret: string;
  shopId: string;
}

interface Headers {
  'x-aos-signature': string;
}

type BodyDict = {
  [key: string]: string | number | boolean | Date | BodyDict | any[];
};
type QueryDict = {
  [key: string]: string | number | boolean | Date | QueryDict | any[];
};

interface DataType {
  body?: BodyDict;
  query?: QueryDict;
}

const DEFAULT_OPTION: Partial<InitializeOptions> = {
  version: 1,
};

let globalOption: InitializeOptions;

export function initialize(options: InitializeOptions) {
  if (typeof options !== 'object') {
    throw new Error('');
  }

  globalOption = Object.assign({}, DEFAULT_OPTION, options);
}

export async function request(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  path: string,
  data?: DataType
) {
  switch (method) {
    case 'GET':
      break;
    case 'POST':
      break;
    case 'PATCH':
      break;
    case 'DELETE':
      break;

    default:
      throw new Error('Unpermittable Method');
  }

  if (typeof path !== 'string') {
    throw new Error('Type of path should be string');
  }

  if (path[0] === '/') {
    path = path.slice(1);
  }
  let realPath = `http://localhost:3000/api/v${globalOption.version}/shops/${globalOption.shopId}/${path}`;
  let bodyData = {};
  if (data !== undefined) {
    if (typeof data !== 'object') {
      throw new Error('Data should be object');
    }
    if (data.query !== undefined) {
      if (typeof data.query !== 'object') {
        throw new Error('Query should be object');
      }

      realPath += '?';
      /**
       * api.foo.bar/datas?ids=1,2,3
       * api.foo.bar/datas?ids[]=1,2,3
       * api.foo.bar/dat/as?ids=1&ids=2&ids=3
       */
      for (const key in data.query) {
        if (data.query[key].hasOwnProperty('length')) {
          realPath += `${key}=[]${data.query[key]}&`;
        } else {
          realPath += `${key}=${data.query[key]}&`;
        }
      }
      realPath = realPath.slice(0, realPath.length - 1);
    }
    if (data.body !== undefined) {
      if (typeof data.body !== 'object') {
        throw new Error('Body should be object');
      }

      bodyData = data.body;
    }
  }

  const headers: Headers = { 'x-aos-signature': globalOption.shopId };

  return await axios({
    method,
    url: realPath,
    headers,
    data: bodyData,
  }).then((response) => {
    return response.data;
  });
}
