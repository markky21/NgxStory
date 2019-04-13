import { Component } from '@angular/core';

@Component({
  selector: 'storyapp-typography-story',
  template: `
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Display 4
          <br>(Single Line)
          <br>h1
        </span>
        </div>
        <div class="col-8">
          <h1>Light 112pt</h1>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Display 3
          <br>(Single Line)
          <br>h2
        </span>
        </div>
        <div class="col-8">
          <h2>Regular 56pt</h2>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Display 2
          <br>(Single Line)
          <br>h3
        </span>
        </div>
        <div class="col-8">
          <h3>Regular 45pt</h3>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Display 1
          <br>(Single Line)
          <br>h4
        </span>
        </div>
        <div class="col-8">
          <h4>Regular 34pt</h4>
        </div>
      </div>
      <hr>
      <br>
      <br>

      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Heading
          <br>h5
        </span>
        </div>
        <div class="col-8">
          <h5>Regular 24pt</h5>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Title
          <br>h6
        </span>
        </div>
        <div class="col-8">
          <h6>Bold 20pt</h6>
        </div>
      </div>
      <hr>
      <br>

      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Subheading
          <br>h6.subheading
        </span>
        </div>
        <div class="col-8">
          <h6 class="subheading">Regular 15pt</h6>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Body emphasis
          <br>.emphasis
        </span>
        </div>
        <div class="col-8">
          <span class="emphasis">Bold 13pt</span>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Body regular
        </span>
        </div>
        <div class="col-8">
          <span>Regular 13pt</span>
        </div>
      </div>
      <hr>
      <div class="row align-items-center">
        <div class="col-4">
        <span class="caption font-light-secondary">
          Caption
          <br>.caption
        </span>
        </div>
        <div class="col-8">
          <span class="caption">Regular 11pt</span>
        </div>
      </div>
      <hr>
      <br>
      <br>
      <div class="row">
        <div class="col-4">
          <h5>Heading</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo non purus eleifend lacinia. Integer bibendum aliquam
          metus, ac pretium nisl fermentum a. Etiam in vulputate turpis. Ut finibus massa ex, quis vulputate nisl rhoncus quis. Pellentesque
          rutrum feugiat diam lacinia pharetra. Curabitur consectetur dolor sit amet consequat varius. Integer eleifend, justo eu pharetra
          laoreet, ipsum nisl auctor velit, quis efficitur erat eros eget odio. Vestibulum porttitor diam felis, vel luctus ligula mattis
          at. Quisque non leo quis nunc feugiat cursus. Aliquam id cursus sem, vel lobortis nisl. In erat nibh, volutpat eu auctor
          fermentum, porttitor vel eros. Vestibulum condimentum nisi odio, vitae auctor elit maximus eget. Phasellus a tempor enim. Proin
          vel suscipit odio. Donec scelerisque eget risus ac ornare. Vestibulum pulvinar ipsum ut nunc tempor commodo a a mauris.
        </div>
        <div class="col-4">
          <h6>Title</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo non purus eleifend lacinia. Integer bibendum aliquam
            metus, ac pretium nisl fermentum a. Etiam in vulputate turpis. Ut finibus massa ex, quis vulputate nisl rhoncus quis.
            Pellentesque rutrum feugiat diam lacinia pharetra. Curabitur consectetur dolor sit amet consequat varius. Integer eleifend,
            justo eu pharetra laoreet, ipsum nisl auctor velit, quis efficitur erat eros eget odio. Vestibulum porttitor diam felis, vel
            luctus ligula mattis at. Quisque non leo quis nunc feugiat cursus. Aliquam id cursus sem, vel lobortis nisl. In erat nibh,
            volutpat eu auctor fermentum, porttitor vel eros. Vestibulum condimentum nisi odio, vitae auctor elit maximus eget. Phasellus a
            tempor enim. Proin vel suscipit odio. Donec scelerisque eget risus ac ornare. Vestibulum pulvinar ipsum ut nunc tempor commodo a
            a mauris.</p>
        </div>
        <div class="col-4">
          <h6 class="subheading">Subheading</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo non purus eleifend lacinia. Integer bibendum aliquam
            metus, ac pretium nisl fermentum a. Etiam in vulputate turpis. Ut finibus massa ex, quis vulputate nisl rhoncus quis.
            Pellentesque rutrum feugiat diam lacinia pharetra. Curabitur consectetur dolor sit amet consequat varius. Integer eleifend,
            justo eu pharetra laoreet, ipsum nisl auctor velit, quis efficitur erat eros eget odio. Vestibulum porttitor diam felis, vel
            luctus ligula mattis at. Quisque non leo quis nunc feugiat cursus. Aliquam id cursus sem, vel lobortis nisl. In erat nibh,
            volutpat eu auctor fermentum, porttitor vel eros. Vestibulum condimentum nisi odio, vitae auctor elit maximus eget. Phasellus a
            tempor enim. Proin vel suscipit odio. Donec scelerisque eget risus ac ornare. Vestibulum pulvinar ipsum ut nunc tempor commodo a
            a mauris.</p>
        </div>
      </div>

    </div>
  `
})
export class TypographyStoryComponent {}
