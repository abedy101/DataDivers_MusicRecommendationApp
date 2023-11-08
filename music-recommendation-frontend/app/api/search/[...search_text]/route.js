import { log } from 'console';
import { promises as fs } from 'fs';

export const GET = async(request, { params }) => {
    try {
        const file = await fs.readFile(process.cwd() + '/public/music2.json', 'utf-8');
        const data = JSON.parse(file)
        const searchTerm = params.search_text[0]

        console.log(" Search Terms :  ", searchTerm);
        const mappedResult = data.filter(item => item['artist'].toLowerCase().includes(searchTerm.toLowerCase()) || item['track'].toLowerCase().includes(searchTerm.toLowerCase()))

        return new Response(JSON.stringify(mappedResult.length > 20 ? mappedResult.slice(0,20) : mappedResult), {status: 200})
    }catch(error) {
        return new Response('NOT OK', {status: 500})
    }
}