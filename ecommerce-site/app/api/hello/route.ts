export async function GET(){
    return new Response('Hello, World!',
        {
            status: 200
        }
    );
}

export async function POST(){
    return new Response('Thank you for posting to this handler!');
}