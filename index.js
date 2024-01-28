const { start } = require( "apico/server" );

start ( 3000, function( p_port ){
    console.log(" Server running on http://lokalhost:${p_port}" );
});
