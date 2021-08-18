var fs = require('fs');
const deviceModule = require('./device');

const device = deviceModule({
    keyPath: "./certs/xxxxx-private.pem.key",
    certPath: "./certs/xxxxx-certificate.pem.crt",
    caPath: "./certs/root-CA.crt",
    clientId: "desktoparbeit",
    region: "eu-central-1", baseReconnectTimeMs: 4000,
    keepalive: 180, protocol: "mqtts", debug: false
});

device.on('close', function () { console.log('close'); });
device.on('reconnect', function () { console.log('reconnect'); });
device.on('offline', function () { console.log('offline'); });
device.on('error', function (error) { console.log('error', error); });
device.on('connect', function () {
    console.log('Connected to MQTT!');
    runFunction();
});

function sendMQTT(temp, device) {
    console.log('Sending Message!');
    let params = { "sk": "raspberrytemp", "temp": temp };
    device.publish("test", JSON.stringify(params));
}

function getTemp() {
    let temp = (fs.readFileSync('/sys/class/thermal/thermal_zone0/temp').toString())/1000;
    return Math.round(temp);
}

function runFunction() {
    let temp = getTemp();
    sendMQTT(temp, device);
};
