/**
 * Default sort order for an application:
 * By Status:
 *  1. Offered
 *  2. Interviewing
 *  3. Applied
 * 
 * Going to need to handle a sortOption with customized sorting order (FFR)
 * ex.
 * [
 *  {
 *    sortKey: 'status',
 *    sortOrder: [
 *      'applied',
 *      'interviewing',
 *      'offered',
 *      'rejected',
 *      'offerRejected',
 *      'employed'
 *    ]
 *  }
 * ]
 */

const statusOrder = [
  'offered',
  'interviewing',
  'applied',
  'offerRejected',
  'rejected',
  'employed',
  // 'ghosted' This is another status option that should be added eventually (FFR)
]

const documentOrder = [
  'type', // Resume > Cover Letter > Other Doc
  'version', // Larger # > Smaller #
  'name', // Alphabetical
]

export default function ApplicationsSort(applications = [], sortOrder = []) {
  if (applications.length === 0 || sortOrder.length === 0) {
    return applications;
  }

  let newApplicationsOrder = [];

}