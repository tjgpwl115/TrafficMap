

$.getJSON('accident.json', function(data) {
					total = new Array;
					name = new Array;
					weektotal = new Array;
					var count1= 0;
					var count2= 0;
					var count3= 0;
					var aa=0; var bb=0;
					var mon= 0; 	var tue= 0; 	var wen= 0; 	var thr= 0; 	var fri= 0; 	var sat= 0; 	var sun= 0;
			     var html = '';
					 html += '<table class="type09"><thead><tr><th scope="cols">발생시</th><th scope="cols">발생일자</th><th scope="cols">주야구분</th><th scope="cols">사고유형</th><th scope="cols">부상자수</th><th scope="cols">법규위반내용</th><th scope="cols">도로형태</th></tr></thead><tbody>';

			     $.each(data, function(entryIndex, entry) {

						 if(entry.SIGUN_NM == '용인시'||entry.SIGUN_NM == '수원시'||entry.SIGUN_NM == '시흥시')
						 {
							 switch(entry.ACDNT_WDAY_NM){
								 case "월요일":
          					 mon++;
          				   break;
								 case "화요일":
		 								 tue++;
		 							   break;
								 case "수요일":
			           			wen++;
			           			break;
									case "목요일":
					          	thr++;
					          	break;
									case "금요일":
							        fri++;
							        break;
									case "토요일":
									     sat++;
									     break;
								case "일요일":
											sun++;
											break;
								default :
												break;
							 }

							 switch(entry.DAN_DIV_NM){
								 case "주간":
          					 aa++;
          				   break;
								 case "야간":
		 								 bb++;
		 							   break;
								default :
														 break;
							 }

							if(entry.SIGUN_NM == '용인시'){
									 count1++;
								 }
								 else if(entry.SIGUN_NM == '수원시'){
									 count2++;
								 }
								 else if(entry.SIGUN_NM == '시흥시'){
									count3++;
								}

		   					html += '<tr><th scope="row">'+entry.SIGUN_NM + '</th>';
						    html += '<td>'+entry.OCCUR_TM+'</td>';
								html += '<td>'+entry.DAN_DIV_NM+'</td>';
								html += '<td>'+entry.ACDNT_TYPE_NM+'</td>';
								html += '<td>'+entry.INJURY_PSNCNT+'</td>';
								html += '<td>'+entry.REGULTN_VIOLT_MDCLASS_NM+'</td>';
								html += '<td>'+entry.ROAD_FORM_NM+'</td>';
							  html += '</tr>';
					 		}

			   });
				 html += '</tbody></table>';

				 $('#dictionary').html(html);

				 var name =['용인시','수원시','시흥시'];
				  var weekname =['월요일','화요일','수요일','목요일','금요일','토요일','일요일'];
				 total.push(count1,count2,count3);
				 weektotal.push(mon,tue,wen,thr,fri,sat,sun);
						console.log(total);
						console.log(name);
						console.log(aa);
						console.log(bb);
				var ctx = document.getElementById('myChart').getContext('2d');

				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: name,
				        datasets: [{
				            label: '도시별 사망자수',
				            data: total,
				            backgroundColor: [
				                'rgba(255, 99, 132, 0.2)',
				                'rgba(54, 162, 235, 0.2)',
				                'rgba(255, 206, 86, 0.2)'

				            ],
				            borderColor: [
				                'rgba(255, 99, 132, 1)',
				                'rgba(54, 162, 235, 1)',
				                'rgba(255, 206, 86, 1)'

				            ],
				            borderWidth: 1
				        }]
				    },
						options: {
								 responsive: false,
								 title: {
					display: true,
					text: 'Citizen Total'
						 }
					 },
				});

				var ctx1 = document.getElementById('myChart1').getContext('2d');

				var myChart1 = new Chart(ctx1, {
						type: 'bar',
						data: {
								labels: weekname,
								datasets: [{
										label: '요일별 사망자수',
										data: weektotal,
										backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
										borderWidth: 1
								}]
						},
						options: {
								 responsive: false,
								 title: {
					display: true,
					text: 'Weekend Total'
			}, scales: {
            yAxes: [{
                stacked: true,
								ticks: {
									min: 0,
									stepSize : 20,
									fontSize : 14,
								}
            }]
        }
						 }
				});
			});
