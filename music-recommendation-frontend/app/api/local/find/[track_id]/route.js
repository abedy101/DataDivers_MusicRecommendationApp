import { log } from 'console';
import { promises as fs } from 'fs';

export const GET = async(request, { params }) => {
    try {
        const file = await fs.readFile(process.cwd() + '/public/music2.json', 'utf-8');
        const data = JSON.parse(file)
        const trackId = params.track_id

        console.log(" Search Terms :  ", trackId);
        const mappedResult = data.filter(item => item.track_id == trackId)[0]

        return new Response(JSON.stringify(mappedResult), {status: 200})
    }catch(error) {
        return new Response('NOT OK', {status: 500})
    }
}