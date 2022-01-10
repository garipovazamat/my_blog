
const app = Vue.createApp({});

app.component('participants-form', {
    data() {
        return {
            participantLines: [],
            teamCount: 3,
            teams: [],
        }
    },

    methods: {
        getTeams() {
            let participants = this.getParticipants(this.participantLines);
            let teams = [];
            // Создаю пустые команды
            let i = 0;
            while(i < this.teamCount) {
                teams.push({participants: [], power: 0})
                i++;
            }

            i = 0;
            while (i < participants.length) {
                let teamIndexToAdd = this.getTeamToAddIndex(teams);
                teams[teamIndexToAdd].participants.push(participants[i]);
                teams[teamIndexToAdd].power = teams[teamIndexToAdd].power + participants[i].weight;
                i++;
            }

            this.teams = teams;
        },

        getTeamToAddIndex(teams) {
            let smallestTeamIndex = 0;
            let weakestTeamIndex  = 0;

            let smallestTeamSize = 999999;
            let weakestTeamPower = 999999;

            i = 0;
            while (i < teams.length) {
                let team = teams[i];
                if (team.power < weakestTeamPower) {
                    weakestTeamPower = team.power;
                    weakestTeamIndex = i;
                }

                if (team.participants.length < smallestTeamSize) {
                    smallestTeamSize = team.participants.length;
                    smallestTeamIndex = i;
                }

                i++;
            }

            console.log(smallestTeamIndex, weakestTeamIndex, smallestTeamSize, weakestTeamPower);

            if (smallestTeamSize < teams[weakestTeamIndex].participants.length) {
                return smallestTeamIndex;
            }

            return weakestTeamIndex;
        },

        getParticipants(participantLines) {
            let lines = participantLines.split(/\r?\n/);
            let participants = [];
            lines.forEach(function (line) {
                line = line.trim();
                let items = line.split(' ');
                let weight = items[items.length - 1];
                let name = items.slice(0, items.length - 1).join(' ');
                let participant = {name: name, weight: Number(weight)};
                participants.push(participant);
            });

            function compare( a, b ) {
                if ( a.weight > b.weight ){
                    return -1;
                }
                if ( a.weight < b.weight ){
                    return 1;
                }
                return 0;
            }
            participants.sort(compare);

            return participants
        },
    },

    template: `
        <div :style="{ margin: '20px' }">
            <div class="mb-3">
                <label for="partisipants" class="form-label">Список участников с баллами от 1 до 10</label>
                <textarea class="form-control" id="partisipants" rows="18" v-model="participantLines">{{ participantLines }}</textarea>
            </div>
            
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Количество команд</span>
                <input type="number" class="form-control" aria-describedby="addon-wrapping" v-model.number=teamCount>
                <button class="btn btn-outline-secondary" type="submit" v-on:click="getTeams">Разбить по командам</button>
            </div>
            
            <div class="mb-3" v-if="teams.length != 0">
                <result-table :teamCount="teamCount" :teams="teams"/>
            </div>
        </div>
    `
});

app.component('result-table', {
    props: {
        'teamCount': Number,
        'teams': Array,
    },

    template: `
        <div v-for="teamIndex in teams.length" :key="teamIndex" style="margin-top: 10px">
            <b>Команда {{teamIndex}}</b>
            <ul class="list-group">
                <li class="list-group-item" v-for="participant in teams[teamIndex - 1].participants">
                    {{participant.name}} {{participant.weight}}
                </li>
            </ul>
        </div>
    `,
});

app.component('teamList', {
    props: {
        'teamCount': Number,
        'teams': Array,
    },

    template: `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th v-for="n in teamCount" :key="n" scope="col">Команда {{ n }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="team in teams" scope="row">
                    <textarea>
                        {team.participants}
                    </textarea>
                </th>>
                    
                </tr>
            </tbody>
        </table>
    `,
});

app.mount('#app');
