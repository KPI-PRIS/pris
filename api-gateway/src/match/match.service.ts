import {Injectable} from '@nestjs/common';
import {listOfMatches} from "./data";

@Injectable()
export class MatchService {
    create(createMatchDto) {
        //TODO: add create Match function
        console.log(createMatchDto)
        return 'This action adds a new match';
    }

    findAll() {
        return listOfMatches;
    }

    findAllByPage(numberPage: number) {
        const itemsPerPage = 4;
        const startIndex = (numberPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const totalMatches = listOfMatches.length;
        const totalPages = Math.ceil(totalMatches / itemsPerPage);

        return {
            numberPage,
            matches: listOfMatches.slice(startIndex, endIndex),
            totalMatches,
            totalPages,
        };
    }


    findOne(id: number) {
        return `This action returns a #${id} match`;
    }

    update(id: number, updateMatchDto) {
        console.log(updateMatchDto)
        return `This action updates a #${id} match`;
    }

    remove(id: number) {
        return `This action removes a #${id} match`;
    }
}
