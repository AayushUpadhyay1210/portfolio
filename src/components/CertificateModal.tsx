import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export function CertificateModal({
  open,
  onClose,
  fileUrl,
}: {
  open: boolean
  onClose: () => void
  fileUrl: string
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="absolute inset-0 bg-base/90 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Google Cloud certificate"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl h-[85vh] bg-base-panel border border-base-border flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-base-border px-6 py-4">
              <span className="font-mono text-xs tracking-widest2 uppercase text-ink-dim">
                Certificate Viewer
              </span>
              <button
                onClick={onClose}
                aria-label="Close certificate viewer"
                className="text-ink-muted hover:text-signal transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={fileUrl}
              title="Google Cloud Associate Cloud Engineer certificate"
              className="flex-1 w-full bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
