/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import { Constants } from '../Constants';

export const environment = {
  production: false,
  apiUrl: (window.location.hostname==="localhost") ? new URL(Constants['apiUrl']) : new URL(`${window.location.protocol}//${window.location.hostname}/api/${window.location.pathname.split('/')[1]}`),
  deliveryUrl: (window.location.hostname==="localhost") ? new URL(Constants['deliveryUrl']) : new URL(`${window.location.protocol}//${window.location.hostname}/${window.location.pathname.split('/')[1]}`),
    httpOptions: {
    pollTime: 999999,
    retries: 5
  }
};
