import { Dropdown } from "../Dropdown/Dropdown";
import { Button } from "../Button/Button";
import { cities } from "../../data/cities";
import { experiences } from "../../data/experience";
export const SearchForm = () => {




return <div>

    <Dropdown items={cities} data-testid="city-list"></Dropdown>
    <Dropdown items={experiences} data-testid="experience-list"></Dropdown>
    <checkbox name="label-check" id="label-check" data-testid="checkbox"></checkbox>
    <label for="label-check">Has pool?</label>
    <Button></Button>

</div>};