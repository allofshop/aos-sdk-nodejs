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
  if (path[0] === '/') {
    path = path.slice(1);
  }
  let realPath = `http://localhost:3000/api/v${globalOption.version}/shops/${globalOption.shopId}/${path}`;
  let bodyData = {};
  if (data !== undefined) {
    if (typeof data !== 'object') {
      throw new Error('');
    }
    if (data.query !== undefined) {
      realPath += '?';
      /**
       * api.foo.bar/datas?ids=1,2,3
       * api.foo.bar/datas?ids[]=1,2,3
       * api.foo.bar/datas?ids=1&ids=2&ids=3
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
