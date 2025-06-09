export async function GET(){
    return new Response(JSON.stringify({ message: 'Hello, World!'}),
        {
            status: 200
        }
    );
}

export async function POST(){
    return new Response('Thank you for posting to this handler!');
}