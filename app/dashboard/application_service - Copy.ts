export interface Application {
  name:string;
  image:string;
}
export class DashboardList {
  dashboard: Application[] = [
    {name: 'Facebook',image: 'facebook'},
    {name: 'Twitter',   image: 'twitter'},
    {name: 'Pintrest',  image: 'pintrest'},
    {name: 'LinkedIn',  image: 'linkedin'}
  ];
  
  get(): Application[] {
    return this.dashboard;
  }

  add(value: string): void {
    this.dashboard.push({
      name: value,
      image: value
    });
  }
}
