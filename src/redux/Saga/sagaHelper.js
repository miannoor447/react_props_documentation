

import { select, put } from "redux-saga/effects";
import { base_url,login_api,login_step_2_api } from "../Constant";
import { setTokenExpired } from "../Actions/PostActions/setTokenExpired";
const DEBUG_LOG_API = true;
const DEBUG_LOG_API_REQUEST = true;
const DEBUG_LOG_API_RAW_RESPONSE = true;
const DEBUG_LOG_API_JSON_RESPONSE = true;

const debug_log = (should_log, text, variable) => {
    if (should_log) {
        console.log(`*** text *** ${text} ************`);
        console.log(`*** variable *** ${variable} ************`);
    }
};

function* fetchData(action) {
    let all_state = yield select();
    // console.log("all state" ,all_state?.LOGINREDUCER?.loginData?.payload?.accessToken)

    try {
        let completeUrl = new URL(action.payload.apiUrl, base_url).toString();
        debug_log(DEBUG_LOG_API, `${action.payload.requestType} API URL`, completeUrl);

        const request = {
            headers: {
                "Content-Type": action.payload.header,
            },
            method: action.payload.requestType,
        };

        if (action.payload.metaData && (action.payload.apiUrl !== login_api||action.payload.apiUrl !== login_step_2_api)) {
            //  request.headers.Authorization ="Bearer " + (all_state?.LOGINREDUCER?.loginData?.payload?.accessToken||null);
                
            }

        if (action.payload.requestType !== "GET") {
            request.body =
                action.payload.header === "application/x-www-form-urlencoded"
                    ? action.payload.body
                    : JSON.stringify(action.payload.body);
        }
 
        debug_log(DEBUG_LOG_API_REQUEST, `API REQUEST ${completeUrl}`, request);
        // testing
        console.log("testing cannot get error " ,  completeUrl ,  '+' ,  request);
        if (base_url !== "") {
            const response = yield fetch(completeUrl, request);
            debug_log(
                DEBUG_LOG_API_RAW_RESPONSE,
                `API RAW RESPONSE ${completeUrl}`,
                response
            ); 
      
          
            if(response.status === 401){
                yield put(setTokenExpired());
            }
            // Check for non-JSON responses (e.g., HTML error pages)
            if (!response.ok) {
                const responseText = yield response.text();
                console.log("Non-JSON response:", responseText);

                if (typeof action.payload.onFailure === "function") {
                    // action.payload.onFailure({ message: "Non-JSON response received." });
                    action.payload.onFailure({message:JSON.parse(responseText)})
                }

                return; // Stop processing further
            }

            const responseData = yield response.json();
            debug_log(
                DEBUG_LOG_API_JSON_RESPONSE,
                `API JSON RESPONSE ${completeUrl}`,
                responseData
            );
            if (action.payload.reduxActionType !== "") {
                yield put({
                    type: action.payload.reduxActionType,
                    payload: responseData,
                    requestParams: action.payload.body,
                });
            }

            if (typeof action.payload.onSuccess === "function") {
                action.payload.onSuccess(responseData);
            }
        }
    } catch (error) {
        console.log("catch error", error);
        if (typeof action.payload.onFailure === "function") {
            action.payload.onFailure({ message: error.message });
        }
    }
}

export default fetchData;
