using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using SerialCom;

namespace HybServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultController : ControllerBase
    {
		// GET api/result?status=...
		[HttpGet]
	    public IActionResult Get(string status)
	    {
		    if (String.IsNullOrEmpty(status))
			    return BadRequest("missing status");

		    try
		    {
			    SerialPort.OpenAndWrite(status);
			}
		    catch (Exception e)
		    {
			    return UnprocessableEntity(e.Message);
		    }

		    return Ok(status);
	    }
    }
}