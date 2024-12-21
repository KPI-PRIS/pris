export interface TicketAvailability {
    price: number;
    available: number;
}

export interface Match {
    id: string;
    date: string;
    home_team: string;
    opponent: string;
    time: string;
    where: string;
    count_of_tickets: number;
    price_start_from: number;
    ticket_availability: {
        VIP: TicketAvailability;
        Standard: TicketAvailability;
        Economy: TicketAvailability;
    };
    home_team_logo: string;
    opponent_logo: string;
}

export interface MatchPagination {
    matches: Match[],
    numberPage: number,
    totalMatches: number,
    totalPages: number,
}