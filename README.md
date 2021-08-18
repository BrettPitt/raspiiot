# Setup

device folder von richie
https://github.com/aws/aws-iot-device-sdk-js/tree/master/device

First of all create project folder where everything well take place
Device Setup:
1. install Node (check first with node --version)
    cd ~
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt-get install -y nodejs

2. then run:
    sudo apt-get install cmake
    sudo apt-get install libssl-dev

3. npm install

4. add Certs
# Certs
mkdir certs and add / change names
- xxxxx-certificate.pem.crt
- xxxxx-private.pem.key
- root-CA.pem
