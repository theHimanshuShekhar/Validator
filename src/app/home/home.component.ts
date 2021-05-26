import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ElectronService } from "../core/services/index";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private electron: ElectronService) {}

  deviceData = [];

  hostname: String;
  version: String;
  homedir: String;
  username: String;
  cpus: any;
  model: String;

  ngOnInit(): void {
    this.cpus = this.electron.os.cpus();
    this.hostname = this.electron.os.hostname();
    this.version = this.electron.os.version();
    this.homedir = this.electron.os.userInfo().homedir;
    this.username = this.electron.os.userInfo().username;
    this.model = this.cpus[0].model;

    this.deviceData.push({
      name: "Hostname",
      value: this.electron.os.hostname(),
    });
    this.deviceData.push({
      name: "Username",
      value: this.electron.os.userInfo().username,
    });
    this.deviceData.push({
      name: "Version",
      value: this.electron.os.version(),
    });
    this.deviceData.push({
      name: "Home Directory",
      value: this.electron.os.userInfo().homedir,
    });
    this.deviceData.push({
      name: "CPU",
      value: this.cpus[0].model,
    });
    this.deviceData.push({
      name: "Threads",
      value: this.electron.os.cpus().length,
    });
  }
}
