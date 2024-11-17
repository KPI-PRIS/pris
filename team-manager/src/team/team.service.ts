import {Injectable} from '@nestjs/common';

export interface Team {
    id: number;
    name: string;
    coach_id?: number;
    type: string[];
}

@Injectable()
export class TeamService {
    private teams: Team[] = [
        {id: 1, name: 'Динамо', coach_id: 101, type: ['domestic']},
        {id: 2, name: 'Шахтар', coach_id: 102, type: ['international', 'domestic']},
    ];

    create(team: Team): Team {
        if (this.teams.find((t) => t.id === team.id)) {
            throw new Error('Команда з таким ID вже існує');
        }
        this.teams.push(team);
        return team;
    }

    findAll(): Team[] {
        return this.teams;
    }

    findOne(id: number): Team | undefined {
        return this.teams.find((team) => team.id === id);
    }

    update(id: number, updatedTeam: Team): Team {
        const index = this.teams.findIndex((team) => team.id === id);
        if (index === -1) {
            throw new Error('Команду не знайдено');
        }
        this.teams[index] = updatedTeam;
        return updatedTeam;
    }

    delete(id: number): void {
        const index = this.teams.findIndex((team) => team.id === id);
        if (index === -1) {
            throw new Error('Команду не знайдено');
        }
        this.teams.splice(index, 1);
    }
}
