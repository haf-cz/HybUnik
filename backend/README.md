# backend

once the web reaches the last page it should send request to REST based backend which will serve as trigger for HW and/or other purposes (e.g. notify operator)

## backend

Will be listening on http for communication possibly in JSON other formats. 
Once msg comes to endpoint GET/PUT e.g. \check\
It will send msg on COM to attached HW part and (if necesary - again via REST API) notify the operator.
For testing purposes also other endpoint should be available e.g. \test\green, test\red, ...

## HW

For the HW part Arduino arduino-beetle-atmega32u4-usb could be used / or any similar HW.
Simple controler waiting for specific msg on SerialPort.
For Positive and negative scenarios different msg might be needed.
Therefore several smg should be implemented e.g. OK,NOT,ERR,RESET
