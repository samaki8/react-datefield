//src\components\DateField.jsx

/**
 * DateField.jsx
 *
 * Composant champ de saisie de date avec validation et gestion d’erreur,
 * utilisant React Hook Form. Permet à l’utilisateur de sélectionner une date
 * et affiche un message d’erreur si la date est invalide ou absente.
 * 
 * Props :
 * - label : texte du label du champ
 * - id : identifiant unique pour le champ
 * - register : fonction de React Hook Form pour enregistrer le champ
 * - errors : objet contenant les erreurs de validation
 * - validationRules : règles de validation pour le champ
 *
 * Version : 1.0.0
 * Date : 2025-04-16
 * Auteur : Samira
 */

import React from "react";
import './datefield.css';
import PropTypes from 'prop-types'; // Pour la validation des props

/**
 * Composant fonctionnel DateField
 */
function DateField({ label, id, register, errors = {}, validationRules = {} }) {

    return (
        <div style={{ marginBottom: "1rem" }}>
            {/* Label associé au champ de saisie */}
            <label htmlFor={id} style={{ display: "block", marginBottom: "0.5rem" }}>
                {label}
            </label>
            {/* Champ de saisie de type date, enregistré via React Hook Form */}
            <input
                type="date"
                id={id}
                {...register(id, validationRules)} // Enregistrement du champ avec les règles de validation
                style={{
                    padding: "8px",
                    width: "100%",
                    border: errors[id] ? "1px solid red" : "1px solid #ccc", // Bordure rouge si erreur
                    borderRadius: "4px",
                }}
            />
            {/* Affichage du message d’erreur si une erreur est présente pour ce champ */}
            {errors[id] && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors[id].message}
                </p>
            )}
        </div>
    );
}

// Validation des types des props avec PropTypes
DateField.propTypes = {
    label: PropTypes.string.isRequired,         // Label du champ (obligatoire)
    id: PropTypes.string.isRequired,            // Identifiant du champ (obligatoire)
    register: PropTypes.func.isRequired,        // Fonction register de React Hook Form (obligatoire)
    errors: PropTypes.object,                   // Objet des erreurs (optionnel)
    validationRules: PropTypes.object           // Règles de validation (optionnel)
};

// Valeurs par défaut pour les props optionnelles
DateField.defaultProps = {
    errors: {},
    validationRules: {}
};

export default DateField;