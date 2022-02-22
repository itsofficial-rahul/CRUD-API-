

var a = []
function get() {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(json => {
			let li = `<tr><th>userid</th><th>id</th><th>title</th><th>completed</th><th>delet</th><th>edit</th></tr>1`
			a = json
			json.forEach(element => {
				li +=
					`<tr>
		   <td>${element.userId}</td>
		   <td>${element.id}</td>
		   <td>${element.title}</td>
		   <td>${element.completed}</td>
		   <td><button onclick="delet(${element.id})">delete</button></td>
		   <td><button onclick="edit(${element.id})">Edit</button></td>
		 </tr> `;
			});

			document.getElementById("table1").innerHTML = li
		})
};
function delet(id) {
	var filt = a.filter((el) => {
		return el.id != id
	})
	a = filt
	console.log(filt)
	let li = `<tr><th>userid</th><th>id</th><th>title</th><th>completed</th><th>delet</th><th>edit</th></tr>1`
	a.forEach(element => {
		li += `<tr>
    <td>${element.userId}</td>
		   <td>${element.id}</td>
		   <td>${element.title}</td>
		   <td>${element.completed}</td>
		   <td><button onclick="delet(${element.id})">delete</button></td>
		   <td><button onclick="edit(${element.id})">Edit</button></td>
</tr>`

	})
	document.getElementById("table1").innerHTML = li
}

function post() {
	var userId = document.getElementById("userid").value
	var id = document.getElementById("id1").value
	var title = document.getElementById("title").value
	var completed = document.getElementById("compl").value

	if (userId != " " && id != " " && title != " " && completed != " ") {
		var result = {
			userId: document.getElementById("userid").value,   // same hona jaruri
			id: document.getElementById("id1").value,
			title: document.getElementById("title").value,
			completed: document.getElementById("compl").value
		}

		a.unshift(result)
		let li = `<tr><th>userid</th><th>id</th><th>title</th><th>completed</th><th>delet</th><th>edit</th></tr>1`
		a.forEach(element => {
			li += `<tr>
		       <td>${element.userId}</td>
			   <td>${element.id}</td>
			   <td>${element.title}</td>
			   <td>${element.completed}</td>
			   <td><button onclick="delet(${element.id})">delete</button></td>
			   <td><button onclick="edit(${element.id})">Edit</button></td>
	</tr>`

		})

		document.getElementById("table1").innerHTML = li
	}
	else {
		alert("fill all field")
	}
}



function edit(id) {
	var newUserid = prompt("enter user id")
	var newid = prompt("enter  id")
	var newtitle = prompt("enter title id")
	var newcomp = prompt("enter newcomp")
     
	 console.log(newUserid.length)

	if(newUserid.length>0 && newid.length>0 && newtitle.length>0 && newcomp.length>0)
	{
	for (const obj of a) {
		if (obj.id === id) {
			obj.userId = newUserid
			obj.id = newid
			obj.title = newtitle
			obj.completed = newcomp
			break;
		}
	}

	let li = `<tr><th>userid</th><th>id</th><th>title</th><th>completed</th><th>delet</th><th>edit</th></tr>1`

	a.forEach(element => {
		li +=
			`<tr>
 <td>${element.userId}</td>
 <td>${element.id}</td>
 <td>${element.title}</td>
 <td>${element.completed}</td>
 <td><button onclick="delet(${element.id})">delete</button></td>
 <td><button onclick="edit(${element.id})">Edit</button></td>
</tr> `;
	});

	document.getElementById("table1").innerHTML = li
}
else{
	alert("empty statemnet not allow")
}
}