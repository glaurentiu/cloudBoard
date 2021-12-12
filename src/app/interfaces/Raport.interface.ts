import {Material} from '../interfaces/Material.interface';
export interface Raport {
  id?: number;
  projectAndClient: string;
  date: string;
  team: string;
  materialsUsed: string;
  description: string;
  projectId?: Number;
  materialsQuantity?: Material[];
  bill: boolean;

}
