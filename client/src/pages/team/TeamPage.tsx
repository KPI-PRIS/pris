import {useQuery} from "react-query";
import {getTeams} from "./team-service.ts";
import {Team} from "./ITeam.ts";

export default function TeamsPage() {
    const {isLoading, error, data} = useQuery<Team[], Error>('teams', getTeams)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <h1 className='text-2xl'>Teams:</h1>
            {data && data.map((team: Team) => (
                <>
                    <div>id : {team.id}</div>
                    <div>name : {team.name}</div>
                </>
            ))}
        </>
    )
}