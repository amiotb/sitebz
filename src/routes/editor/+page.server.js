import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {

    if(dev){
        return;
    } else {
        error(404)
    }

};