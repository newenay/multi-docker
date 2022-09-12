const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_stategy: () => 1000
});

function fib(index) {
    // this is a purposefully slow, recursive solution
    if( index < 2 ) return 1;
    // else
    return fib( index - 1 ) + fib( index - 2 );
}

subm.on('message', (channel, message) => {
    redisClient.hset( 'values', message, fib( parseInt(message) ) );
});

sub.subscribe('insert');