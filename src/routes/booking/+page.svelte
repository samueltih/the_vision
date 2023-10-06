<script lang="ts">
	import { ChevronLeft, ChevronDown } from 'svelte-bootstrap-icons';
	import { InlineCalendar } from 'svelte-calendar';
	import Calendar from '../../components/Calendar/Calendar.svelte';
	import TimeSlot from '../../components/TimeSlot.svelte';
	const theme = {
		calendar: {
			width: '400px',
			shadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
		}
	};
</script>

<div class="max-w-screen-xl w-full">
	<div class="flex items-center my-4 py-4">
		<span class="flex-1 flex gap-2 items-center">
			<ChevronLeft /> <span>Retour</span>
		</span>
		<span class="flex-1" />
	</div>
	<div class="my-4 py-4 border-b border-solid border-b-black">
		<h1 class="text-left">Consultation pour études à l'étranger</h1>
		<p>Consulten nos disponibilités et réservez la date et l'heure qui vous conviennent</p>
	</div>
	<div class="flex gap-4 items-center">
		<span>Filtrer par:</span>
		<span class="flex gap-2 items-center">Lieu de service (Tout) <ChevronDown /></span>
		<span class="flex gap-2 items-center">Membre de l'équipe (Tout) <ChevronDown /></span>
	</div>
	<div class="flex gap-8">
		<div class="flex-1 flex flex-col items-stretch">
			<div class="flex-1 border-b border-solid border-b-black flex gap-4 items-center py-4 mt-8">
				<h4 class="font-bold flex-1">Sélectionner une date et une heure</h4>
				<span>heure normale d'Afrique de l'Ouest (UTC+1)</span>
			</div>
			<div class="flex gap-8">
				<div class="flex-1">
					<Calendar />
				</div>
				<div class="flex-1 flex flex-col gap-4">
					<div>Selectionnez une date</div>
					<div class="flex gap-2 flex-wrap">
						<TimeSlot />
						<TimeSlot />
						<TimeSlot />
						<TimeSlot />
						<TimeSlot />
						<TimeSlot />
					</div>
				</div>
			</div>
		</div>
		<div class="w-64 flex flex-col gap-2">
			<div class="flex gap-2 items-center">
				<h4 class="flex-1">Details du service</h4>
				<ChevronDown />
			</div>
			<div />
		</div>
	</div>
</div>
