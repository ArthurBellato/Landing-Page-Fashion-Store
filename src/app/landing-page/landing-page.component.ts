// src/app/landing-page/landing-page.component.ts

import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LandingPageComponent implements AfterViewInit {
  registration = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngAfterViewInit() {
    const images = document.querySelectorAll('.gallery .image');
    images.forEach((image, index) => {
      image.addEventListener('load', () => {
        image.classList.add('loaded');
      });
      // Gerar preços aleatórios acima de 40 reais
      const price = (Math.floor(Math.random() * 30) + 40).toFixed(2);
      const priceElement = image.parentElement?.querySelector('.price') as HTMLElement;
      if (priceElement) {
        priceElement.textContent = `R$ ${price}`;
      }
    });

    const galleryContainer = document.querySelector('.gallery-container') as HTMLElement;
    const prevButton = document.getElementById('prev') as HTMLButtonElement;
    const nextButton = document.getElementById('next') as HTMLButtonElement;

    let scrollAmount = 0;
    const scrollStep = 220; // Ajuste para o tamanho das imagens e o espaço entre elas

    prevButton.addEventListener('click', () => {
      scrollAmount += scrollStep;  // Mudei a direção aqui
      galleryContainer.style.transform = `translateX(${scrollAmount}px)`;
    });

    nextButton.addEventListener('click', () => {
      scrollAmount -= scrollStep;  // Mudei a direção aqui
      galleryContainer.style.transform = `translateX(${scrollAmount}px)`;
    });
  }

  onSubmit() {
    alert(`Obrigado pelo seu cadastro, ${this.registration.name}! Em breve entraremos em contato.`);
  }
}
