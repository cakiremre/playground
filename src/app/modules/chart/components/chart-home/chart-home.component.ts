import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';
import { tap } from 'rxjs/operators';
import { CountryStatus } from '../models/country-status';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chart-home',
  templateUrl: './chart-home.component.html',
  styleUrls: ['./chart-home.component.css'],
})
export class ChartHomeComponent implements OnInit, OnDestroy {
  BASE_URL = `https://api.covid19api.com/`;
  COVID_URL = {
    COUNTRIES: `${this.BASE_URL}countries`,
    BY_COUNTRY: (country: string) =>
      `${this.BASE_URL}dayone/country/${country}`,
  };

  countries$: Observable<Country[]>;
  selected: string;
  countryCasesChartOptions: any;
  cases: CountryStatus[] = [];
  subscriptions: Subscription[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  getCountries$ = this.httpClient.get<Country[]>(this.COVID_URL.COUNTRIES);

  getCasesByCountry = (countrySlug: string) => {
    return this.httpClient.get<CountryStatus[]>(
      this.COVID_URL.BY_COUNTRY(countrySlug)
    );
  };

  ngOnInit(): void {
    this.countries$ = this.getCountries$.pipe(
      tap((countries) => {
        this.selected = countries[0].Slug;
        this.setOptions();
      })
    );
  }

  onChangeCountry() {
    this.subscriptions.push(
      this.getCasesByCountry(this.selected).subscribe((cases) => {
        this.cases = cases;
        this.setOptions();
      })
    );
  }

  setOptions() {
    this.countryCasesChartOptions = {
      title: {
        text: '',
      },
      legend: {
        data: ['Confirmed', 'Recovered', 'Deaths'],
      },
      tooltip: {},
      xAxis: {
        data: this.cases.map((c) => new Date(c.Date).toLocaleDateString()),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Confirmed',
          type: 'line',
          data: this.cases.map((c) => c.Confirmed),
        },
        {
          name: 'Recovered',
          type: 'line',
          data: this.cases.map((c) => c.Recovered),
        },
        {
          name: 'Deaths',
          type: 'line',
          data: this.cases.map((c) => c.Deaths),
        },
      ],
    };
  }
}
