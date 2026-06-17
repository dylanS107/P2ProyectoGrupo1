import styles from './modal.module.css';

export const Modal = ({ titulo, contenido, onClose, tipo = 'resultado', visible = true }) => {
  if (!visible || !contenido) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{titulo}</h2>
          <button type="button" className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.modalBody}>
          {tipo === 'resultado' && (
            <div className={styles.resultBox}>
              <p className={styles.resultText}>{contenido}</p>
            </div>
          )}
          {tipo === 'error' && (
            <div className={styles.errorBox}>
              <p className={styles.errorText}>{contenido}</p>
            </div>
          )}
          {tipo === 'success' && (
            <div className={styles.successBox}>
              <p className={styles.successText}>{contenido}</p>
            </div>
          )}
        </div>
        <div className={styles.modalFooter}>
          <button type="button" className={styles.closeActionButton} onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};
