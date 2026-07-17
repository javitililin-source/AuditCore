# AuditCore - Arquitectura

## Visión General

AuditCore es una plataforma interna de Auditoría de TI diseñada para automatizar la evaluación de controles tecnológicos.

La plataforma estará dividida en dos componentes principales:

1. Collector Engine
2. Audit Analyzer

---

# Flujo General

Usuario

↓

Inicia sesión en AuditCore

↓

Nueva Evaluación

↓

Selecciona Plataforma

↓

Ejecuta Collector

↓

Obtiene Evidencia

↓

Rule Engine

↓

Genera Hallazgos

↓

Genera Dashboard

↓

Genera Reporte HTML / PDF / Excel

---

# Componentes

## Collector Engine

Responsable de recopilar información del entorno tecnológico.

Ejemplos:

- Microsoft Graph
- Exchange Online
- Azure
- AWS
- VMware

No realiza evaluaciones.

---

## Rule Engine

Evalúa la información obtenida por el Collector.

Ejemplo:

Global Admins

Regla:

Debe existir entre 2 y 4.

Resultado:

PASS / FAIL

---

## Report Engine

Genera:

- Dashboard
- HTML
- PDF
- Excel

---

## Evidence Engine

Almacena la evidencia técnica.

Ejemplo:

- JSON
- CSV
- Logs
- PowerShell Output

---

## Control Engine

Cada Control contiene:

- ID
- Nombre
- Descripción
- Severidad
- Script asociado
- Regla
- Evidencia
- Resultado
- Recomendación
