document.addEventListener('DOMContentLoaded', () => {
  const multiPhaseForm = document.querySelector('.multi-phase-form');
  if (!multiPhaseForm) return;

  const formSteps = multiPhaseForm.querySelectorAll('.form-step');
  const progressDots = multiPhaseForm.querySelectorAll('.progress-dot');
  const prevButton = multiPhaseForm.querySelector('.btn-prev'); // Si hay botones de navegación
  const nextButton = multiPhaseForm.querySelector('.btn-next');
  const submitButton = multiPhaseForm.querySelector('.btn-submit'); // El CTA final
  let currentStep = 0;

  const showStep = (stepIndex) => {
    formSteps.forEach((step, index) => {
      step.classList.toggle('active', index === stepIndex);
    });
    progressDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === stepIndex);
    });
    // Actualizar visibilidad de botones (prev, next, submit)
    // if (prevButton) prevButton.style.display = stepIndex === 0 ? 'none' : 'block';
    // if (nextButton) nextButton.style.display = stepIndex === formSteps.length - 1 ? 'none' : 'block';
    // if (submitButton) submitButton.style.display = stepIndex === formSteps.length - 1 ? 'block' : 'none';
  };

  const validateStep = (stepIndex) => {
    let isValid = true;
    const currentInputs = formSteps[stepIndex].querySelectorAll('input, select, textarea');
    currentInputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        input.classList.add('is-invalid'); // Añadir clase para estilos de error
        // Mostrar mensaje de error (accesibilidad)
      } else {
        input.classList.remove('is-invalid');
        // Añadir marca de verificación verde con JS si es válido
        // let validationIcon = input.nextElementSibling;
        // if (!validationIcon || !validationIcon.classList.contains('validation-icon')) {
        //   validationIcon = document.createElement('span');
        //   validationIcon.classList.add('validation-icon');
        //   input.parentNode.insertBefore(validationIcon, input.nextElementSibling);
        // }
        // validationIcon.innerHTML = '&#10003;'; // Tick mark
        // validationIcon.classList.add('valid');
      }
    });
    return isValid;
  };

  // Lógica para avanzar al siguiente paso
  // if (nextButton) {
  //   nextButton.addEventListener('click', () => {
  //     if (validateStep(currentStep)) {
  //       currentStep++;
  //       if (currentStep < formSteps.length) {
  //         showStep(currentStep);
  //       } else {
  //         // Esto no debería pasar con el botón next si submit está al final
  //       }
  //     }
  //   });
  // }

  // Lógica para manejar el submit final del formulario
  multiPhaseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validar el último paso antes de enviar
    if (validateStep(formSteps.length - 1)) {
      // Aquí enviar los datos del formulario (ej. Fetch API)
      alert('Formulario enviado con éxito!'); // O mostrar página de gracias/mensaje de éxito
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  });

  // Lógica para avanzar de fase cuando la fase 1 es completada (si es automático)
  const phase1Inputs = formSteps[0].querySelectorAll('input[type="text"], input[type="email"]');
  phase1Inputs.forEach(input => {
    input.addEventListener('input', () => {
      const allPhase1InputsFilled = Array.from(phase1Inputs).every(inp => inp.value.trim() !== '');
      if (allPhase1InputsFilled && currentStep === 0) {
        // Pequeño delay para la UX antes de avanzar automáticamente
        setTimeout(() => {
          currentStep = 1;
          showStep(currentStep);
        }, 500);
      }
    });
  });

  // Lógica para el auto-agendamiento (Fase 3) - Integración con Calendly/HubSpot
  // Esto implicaría incrustar el widget de Calendly/HubSpot o abrirlo en un modal
  // Ej: Después de la Fase 2, cargar el widget de agendamiento
  const setupCalendarWidget = () => {
    if (currentStep === 2) { // Fase de Auto-agendamiento
      const calendarContainer = formSteps[2].querySelector('.calendar-interactive-container');
      if (calendarContainer && !calendarContainer.hasAttribute('data-widget-loaded')) {
        // Cargar script externo de Calendly/HubSpot
        // Ej: Calendly.initInlineWidget({ url: 'YOUR_CALENDLY_LINK', parent: calendarContainer });
        // calendarContainer.setAttribute('data-widget-loaded', 'true');
        calendarContainer.innerHTML = '<p>Aquí iría el calendario interactivo de agendamiento (Calendly/HubSpot).</p>';
      }
    }
  };

  multiPhaseForm.addEventListener('step-changed', setupCalendarWidget); // Disparar evento personalizado

  // Inicializar el formulario en el primer paso
  showStep(currentStep);
});