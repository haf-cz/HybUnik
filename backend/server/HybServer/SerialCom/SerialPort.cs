using System;
using System.ComponentModel;
using System.IO.Ports;
using System.Net.Sockets;

namespace SerialCom
{
	public class SerialPort
	{
		public static void OpenAndWrite(string status)
		{
			switch (status)
			{
				case "OK":
					Console.WriteLine("YES YES YES");
					break;
				case "NOK":
					Console.WriteLine("nononononononononono");
					break;
				default:
					Console.WriteLine($"Incorrect status \"{status}\"");
					break;
			}
		}

		private static void List()
		{
			foreach (var portName in System.IO.Ports.SerialPort.GetPortNames())
			{
				Console.WriteLine(portName);
			}
		}
	}
}
