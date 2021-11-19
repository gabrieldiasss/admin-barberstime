import { useState, useEffect } from 'react'
import axios from 'axios'

import { GlobalStyle } from './styles/global'

import { Container, CardAdmin, Hours, Service } from './styles/styles'

interface InfosSchedule {
	barber: Barber;
	service: Services;
	selectedYear: number;
	selectedMonth1: number;
	selectedDay: number;
	selectedHour: string;
	nameUser: string,
}

interface Barber {
	id: number;
    name: string;
	avatar_url: string;
}

interface Services {
	name: string;
	price: number;
}

export function App() {

	const [schedules, setSchedules] = useState<InfosSchedule[]>([])

	useEffect(() => {
		axios.get(`http://localhost:5000/schedules?_embed=comments&_order=desc&_sort=id`)
		.then((response) => {
			setSchedules(response.data)
			console.log(response.data.barber)
		})
		.catch((err) => {
			console.log(err)
		})
	}, [])

	return (
		<Container>

			<GlobalStyle />

			<h1>horários agendados</h1>

			{schedules.map((schedule, key) => (

				<CardAdmin key={key} >
					<div>
						<img src={schedule.barber.avatar_url} alt="" />
						<h2>{schedule.barber.name}</h2>
					</div>

					<Service>
						<h2>{schedule.service.name}</h2>
						<h2> R$ {schedule.service.price}</h2>
					</Service>
					
					<Hours>
						<div>
							{schedule.selectedDay}/
							{schedule.selectedMonth1}/
							{schedule.selectedYear}
						</div>

						<time>{schedule.selectedHour}</time>
						
					</Hours>
					
					<p>Serviço agendado por {schedule.nameUser}</p>

					
				</CardAdmin>
			))}
		</Container>
	);
}

