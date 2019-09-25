# hw

using modified blink example simple switch should be implemented.

## pseudo code
``` C
void on MsgAvailable(cosnt char* msg)
{
	switch( msg )
	{
		case OK:
			lightGreen();
			break;
		case ERR:
		case defautl:
			lightErr();
			break;
	}
}

void lightGreen()
{
	//SET Green PIN to high
}

void lightErr()
{
	//SET Red PIN to high
}
```