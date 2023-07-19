import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    categories = [{
        name: 'Angular',
        selected: false
    }, {
        name: 'Node JS',
        selected: false
    }, {
        name: 'React Native',
        selected: false
    }, {
        name: 'TypeScript',
        selected: false
    }, {
        name: 'JavaScript',
        selected: false
    }];

    projects = [{
        id: '_site-builder',
        name: 'SiteBuilder',
        tags: ['HTML', 'JavaScript','BootStrap','JQuery'],
        description: `Developers' 👨🏽‍💻 A Site Building Application built using HTML and JavaScript, Mobirise for Site Templates, BootStrap for rich-styles`,
        image: 'https://dogimg.vercel.app/api/og?url=https://github.com/Maahi10001/Site-builder',
        link: 'https://maahi10001.github.io/Site-builder/',
        code: 'https://github.com/Maahi10001/Site-builder',
        underDevelopment: false,

    }];

    originalProjects = this.projects;

    constructor() { }

    ngOnInit() {}

    updateFilter() {
        const selectedCategories = this.categories.filter(category => category.selected).map(category => category.name);
        if(selectedCategories.length === 0) {
            this.projects = this.originalProjects;
            return;
        }
        
        this.projects = this.originalProjects.filter(project => {
            return project.tags.some(tag => selectedCategories.includes(tag));
        });
    }
}
