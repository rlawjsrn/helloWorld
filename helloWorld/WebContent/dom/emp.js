let xhtp = new XMLHttpRequest();
		xhtp.onload = function () {
			let data = JSON.parse(xhtp.responseText);
			console.log(data);
			showEmpList(data);
		}
		xhtp.open('get', '../empJsonServlet.json');
		xhtp.send();

		function showEmpList(data) {
			let table, tr, td, txt;
			table = document.createElement('table');
			table.setAttribute('border', '1');

			//타이틀 생성
			tr = document.createElement('tr');
			table.appendChild(tr);
			for (let field in data[0]) {
				td = document.createElement('th');
				txt = document.createTextNode(field.toUpperCase().replace('_', ' '));
				td.appendChild(txt);
				tr.appendChild(td);
			}
			//데이터 생성
			for (let obj of data) {
				tr = document.createElement('tr');
				table.appendChild(tr);
				for (let field in data[0]) {
					td = document.createElement('td');
					txt = document.createTextNode(obj[field]);
					td.appendChild(txt);
				tr.appendChild(td);
				}
			}
			document.getElementById('show').appendChild(table);
		}