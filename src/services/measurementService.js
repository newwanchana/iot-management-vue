import { authHeader } from '../helpers/auth-header';
import { userService } from '.';

export const measurementService = {
    getLastMeasurements,
    getLastMeasurementsAll
};

function getLastMeasurementsAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    // return fetch(`http://192.168.0.102:8080/api_auth/measurements`, requestOptions).then(handleResponse);
    return fetch(`http://192.168.0.18:8080/api_auth/measurements`, requestOptions).then(handleResponse);
}

function getLastMeasurements(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    // return fetch(`http://192.168.0.102:8080/api_auth/measurements?sensor_id=` + id, requestOptions).then(handleResponse);
    return fetch(`http://192.168.0.18:8080/api_auth/measurements?sensor_id=` + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                userService.logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}