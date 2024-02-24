import { Component } from '@angular/core';
import { VoterserviceService } from '../voterservice.service';
import { VoterModel } from '../VoterModel';

@Component({
  selector: 'app-votersdata',
  templateUrl: './votersdata.component.html',
  styleUrls: ['./votersdata.component.css']
})
export class VotersdataComponent {


   allVoters:VoterModel[]=[];
  constructor(private voterServioce: VoterserviceService)
  {

  }

  ngOnInit()
  {
    this.voterServioce.getAllVotersData().subscribe(data=>
      {
    this.allVoters=data;
  console.log(this.allVoters); 
      })
  }

}
